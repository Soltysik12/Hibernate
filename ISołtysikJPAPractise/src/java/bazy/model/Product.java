package bazy.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Product {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )private int productID;

    private String ProductName;
    private int UnitsOnStock;
    @ManyToOne
    @JoinColumn(name = "CATEGORY_FK")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "SUPPLIER_FK")
    private Supplier supplier;

    @ManyToMany (cascade = {CascadeType.PERSIST})
    private Set<TransactionC> transactionCS;

    public Product(){}

    public Product(String ProductName, int UnitsOnStock, Supplier supplier){
        this.ProductName = ProductName;
        this.UnitsOnStock = UnitsOnStock;
        this.supplier = supplier;
    }

    public Product(String ProductName){
        this.ProductName = ProductName;
    }

    public String getProductName() {
        return ProductName;
    }

    public void setProductName(String productName) {
        ProductName = productName;
    }

    public int getUnitsOnStock() {
        return UnitsOnStock;
    }

    public void setUnitsOnStock(int unitsOnStock) {
        UnitsOnStock = unitsOnStock;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<TransactionC> getTransactionCS() {
        return transactionCS;
    }

    public void setTransactionCS(Set<TransactionC> transactionCS) {
        this.transactionCS = transactionCS;
    }
}
