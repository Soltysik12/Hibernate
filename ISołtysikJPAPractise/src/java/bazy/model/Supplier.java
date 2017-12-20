package bazy.model;

import javax.persistence.Entity;
import java.util.Set;

@Entity
public class Supplier extends Company {


    private String bankAccountNumber;


//    @OneToOne (cascade = {CascadeType.PERSIST})
//    @Embedded
//    private Address address;

    public Supplier() {

    }

    public Supplier(String companyName, String street, String city, String zipCode, Set<Product> products, String bankAccountNumber) {
        super(companyName, street, city, zipCode, products);
        this.bankAccountNumber = bankAccountNumber;
    }

    //    public Supplier(String companyName, String street, String city){
//        this.companyName = companyName;
//        this.street = street;
//        this.city = city;
//    }


    public String getBankAccountNumber() {
        return bankAccountNumber;
    }

    public void setBankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
    }
}
