package bazy.controller;

public class ProductRequest {

    private String name;
    private String category;
    private String supplier;
    private int unitsOnStock;

    public ProductRequest() {
    }

    public ProductRequest(String name, String category, String supplier, int unitsOnStock) {
        this.name = name;
        this.category = category;
        this.supplier = supplier;
        this.unitsOnStock = unitsOnStock;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public int getUnitsOnStock() {
        return unitsOnStock;
    }

    public void setUnitsOnStock(int unitsOnStock) {
        this.unitsOnStock = unitsOnStock;
    }
}
