package bazy;

import bazy.model.Category;
import bazy.model.Product;
import bazy.model.Supplier;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.ArrayList;
import java.util.HashSet;

public class Main {

    private static SessionFactory sessionFactory = null;

    public static void main(String[] args){
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Product name: ");
//        String name = scanner.next();
//        System.out.println("In stock: ");
//        int stock = Integer.parseInt(scanner.next());

//        Supplier supplier = new Supplier("da","fdddsad","dasd");
//        Product product = new Product(name, stock, supplier);
        sessionFactory = getSessionFactory();
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
//        session.save(supplier);
//        session.save(product);

        Product p1 = new Product("Carrot", 77, null);

        Supplier supplier = new Supplier("Farmer John", "Budryka", "Krakow", "30-072", new HashSet<Product>(), "12345679");

//        p1.setSupplier(supplier);
//        supplier.getProducts().add(p1);
//        Product p = session.get(Product.class,2);

        Category category = new Category("Vegetables", new ArrayList<Product>());

//        p1 = session.get(Product.class, 2);
//        category.getProducts().add(p1);
//        p1.setCategory(category);

//        session.save(p1);
//        session.save(category);


        tx.commit();
        session.close();
        /*sessionFactory = getSessionFactory();
        Session session = sessionFactory.openSession();
        TransactionC tx = session.beginTransaction();
        Product foundProduct = session.get(Product.class,1);
        System.out.println(foundProduct);
        tx.commit();
        session.close();*/
    }

    private static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            Configuration configuration = new Configuration();
            sessionFactory =
                    configuration.configure().buildSessionFactory();
        }
        return sessionFactory;
    }
}