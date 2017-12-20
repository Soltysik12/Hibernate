package bazy.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@SecondaryTable(name="ADDRESS_TBL")
public class Company {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )private int dbID;

    private String companyName;
    @Column(table = "ADDRESS_TBL")
    private String street;
    @Column(table = "ADDRESS_TBL")
    private String city;
    @Column(table = "ADDRESS_TBL")
    private String zipCode;

    @OneToMany
    @JoinColumn(name = "SUPPLIER_FK")
    private Set<Product> products;

    public Company() {

    }

    public Company(String companyName, String street, String city, String zipCode, Set<Product> products) {
        this.companyName = companyName;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.products = products;
    }

    public int getDbID() {
        return dbID;
    }

    public void setDbID(int dbID) {
        this.dbID = dbID;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}
