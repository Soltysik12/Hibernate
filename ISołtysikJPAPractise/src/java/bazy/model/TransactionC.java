package bazy.model;

import javax.persistence.*;

@Entity
public class TransactionC {

    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )private int transactionID;

    private int transactionNumber;
    private int quantity;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Customer customer;

    public TransactionC() {
    }

    public TransactionC(int transactionNumber, int quantity, Product product, Customer customer) {
        this.transactionNumber = transactionNumber;
        this.quantity = quantity;
        this.product = product;
        this.customer = customer;
    }
}
