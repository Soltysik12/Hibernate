package bazy.service;

import bazy.controller.CompanyRequest;
import bazy.controller.CompanyType;
import bazy.controller.ProductRequest;
import bazy.controller.TransactionRequest;
import bazy.model.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.stereotype.Service;

import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class RestService {

    private SessionFactory sessionFactory;

    public RestService() {
        sessionFactory = getSessionFactory();
    }

    public void addTransaction(TransactionRequest transactionRequest) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();

        List<Customer> customers = getCustomers(session, transactionRequest.getCompany());

        Customer customer;
        if (customers.isEmpty()) {
            customer = new Customer(transactionRequest.getCompany());
            session.save(customer);
        } else {
            customer = customers.get(0);
        }

        List<Product> products = getProducts(session, transactionRequest.getProduct());
        if (products.isEmpty()) {
            session.close();
            return;
        }

        Product product = products.get(0);

        int unitsInStock = product.getUnitsOnStock();
        if (unitsInStock < transactionRequest.getQuantity()) {
            session.close();
            return;
        }

        product.setUnitsOnStock(unitsInStock - transactionRequest.getQuantity());

        TransactionC transactionC = new TransactionC(transactionRequest.getTransactionNumber(), transactionRequest.getQuantity(), product, customer);
        product.getTransactionCS().add(transactionC);

        session.save(product);
        session.save(transactionC);
        tx.commit();
        session.close();
    }

    public void addCompany(CompanyRequest companyRequest) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();

        if (CompanyType.CUSTOMER.equals(companyRequest.getCompanyType())) {
            Customer customer = new Customer(companyRequest.getCompanyName(), companyRequest.getStreet(), companyRequest.getCity(), companyRequest.getZipcode(), new HashSet<Product>(), companyRequest.getDiscount());
            session.save(customer);
        } else if (CompanyType.SUPPLIER.equals(companyRequest.getCompanyType())) {
            Supplier supplier = new Supplier(companyRequest.getCompanyName(), companyRequest.getStreet(), companyRequest.getCity(), companyRequest.getZipcode(), new HashSet<Product>(), companyRequest.getBankAccountNumber());
            session.save(supplier);
        }
        tx.commit();
        session.close();
    }

    public void addProduct(ProductRequest productRequest) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();

        List<Supplier> suppliers = getSuppliers(session, productRequest.getSupplier());

        if (suppliers.isEmpty()) {
            session.close();
            return;
        }

        Supplier supplier = suppliers.get(0);

        List<Category> categories = getCategories(session, productRequest.getCategory());
        Category c;
        if(categories.isEmpty()) {
            c = new Category(productRequest.getCategory(), new ArrayList<Product>());
        } else {
            c = categories.get(0);
        }
        Product p = new Product(productRequest.getName(), productRequest.getUnitsOnStock(), supplier);
        c.getProducts().add(p);

        supplier.getProducts().add(p);

        session.save(p);
        session.save(c);
        session.save(supplier);

        tx.commit();
        session.close();
    }

    private List<Category> getCategories(Session session, String name) {
        TypedQuery<Category> categoryQuery = session.createQuery("from Category as category where category.name like :categoryName", Category.class);
        categoryQuery.setParameter("categoryName", name);

        return categoryQuery.getResultList();
    }

    private List<Customer> getCustomers(Session session, String name) {
        TypedQuery<Customer> query = session.createQuery("from Customer as company where company.companyName like :companyName", Customer.class);

        query.setParameter("companyName", name);
        return query.getResultList();
    }

    private List<Supplier> getSuppliers(Session session, String name) {
        TypedQuery<Supplier> query = session.createQuery("from Supplier as company where company.companyName like :companyName", Supplier.class);

        query.setParameter("companyName", name);
        return query.getResultList();
    }

    private List<Product> getProducts(Session session, String name) {
        TypedQuery<Product> productQuery = session.createQuery("from Product as product where product.ProductName like :productNames", Product.class);
        productQuery.setParameter("productNames", name);

        return productQuery.getResultList();
    }

    private SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            Configuration configuration = new Configuration();
            sessionFactory = configuration.configure().buildSessionFactory();
        }
        return sessionFactory;
    }
}
