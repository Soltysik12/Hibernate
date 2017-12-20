package bazy.controller;

import javax.validation.constraints.NotNull;

public class CompanyRequest {

    private CompanyType companyType;
    private String companyName;
    private String bankAccountNumber;
    private String street;
    private String city;
    private String zipcode;
    private int discount;

    public CompanyRequest() {
    }

    public CompanyRequest(CompanyType companyType, String companyName, String bankAccountNumber, String street, String city, String zipcode, int discount) {
        this.companyType = companyType;
        this.companyName = companyName;
        this.bankAccountNumber = bankAccountNumber;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.discount = discount;
    }

    public CompanyType getCompanyType() {
        return companyType;
    }

    public void setCompanyType(CompanyType companyType) {
        this.companyType = companyType;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getBankAccountNumber() {
        return bankAccountNumber;
    }

    public void setBankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
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

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }
}
