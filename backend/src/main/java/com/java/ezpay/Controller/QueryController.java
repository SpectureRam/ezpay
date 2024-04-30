package com.java.ezpay.Controller;

import com.java.ezpay.Service.QueryService;
import com.java.ezpay.model.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ezpay/api/v1/query")
public class QueryController {

    private final QueryService queryService;

    @Autowired
    public QueryController(QueryService queryService) {
        this.queryService = queryService;
    }

    @GetMapping()
    public List<Query> getAllQueries() {
        return queryService.getAllQueries();
    }

    @GetMapping("/{id}")
    public Query getQueryById(@PathVariable String id) {
        return queryService.getQueryById(id);
    }

    @PostMapping("")
    public Query addQuery(@RequestBody Query query) {
        return queryService.addQuery(query);
    }

    @PutMapping("/{id}")
    public Query updateQuery(@PathVariable String id, @RequestBody Query query) {
        return queryService.updateQuery(id, query);
    }

    @DeleteMapping("/{id}")
    public void deleteQuery(@PathVariable String id) {
        queryService.deleteQuery(id);
    }
}
