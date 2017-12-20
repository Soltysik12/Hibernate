package bazy.model;

import javax.persistence.Entity;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Customer extends Company {

    private int discount;

    public Customer() {
    }

    public Customer(String companyName) {
        this(companyName, "", "", "", new HashSet<Product>(), 0);
    }

    public Customer(String companyName, String street, String city, String zipCode, Set<Product> products, int discount) {
        super(companyName, street, city, zipCode, products);
        this.discount = discount;
    }
}
