package com.java.ezpay.Service;

import com.java.ezpay.model.Query;

import java.util.List;

public interface QueryService {
    List<Query> getAllQueries();

    Query getQueryById(String id);

    Query addQuery(Query query);

    Query updateQuery(String id, Query query);

    void deleteQuery(String id);
}
