package bazy.controller;

import bazy.service.RestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationRestController {

    private final RestService restService;

    @Autowired
    public ApplicationRestController(RestService restService) {
        this.restService = restService;
    }

    @PostMapping("newTransaction")
    @CrossOrigin
    public void newTransaction(@RequestBody TransactionRequest transactionRequest) {
        restService.addTransaction(transactionRequest);
    }

    @PostMapping("newProduct")
    @CrossOrigin
    public void newProduct(@RequestBody ProductRequest productRequest) {
        restService.addProduct(productRequest);
    }

    @PostMapping("newCompany")
    @CrossOrigin
    public void newCompany(@RequestBody CompanyRequest companyRequest) {
        System.out.println(companyRequest.getCompanyType());
        restService.addCompany(companyRequest);
    }
}
