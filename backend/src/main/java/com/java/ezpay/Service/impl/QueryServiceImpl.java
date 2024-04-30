package com.java.ezpay.Service.impl;

import com.java.ezpay.Repository.QueryRepository;
import com.java.ezpay.Service.QueryService;
import com.java.ezpay.model.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QueryServiceImpl implements QueryService {

    private final QueryRepository queryRepository;

    @Autowired
    public QueryServiceImpl(QueryRepository queryRepository) {
        this.queryRepository = queryRepository;
    }

    @Override
    public List<Query> getAllQueries() {
        return queryRepository.findAll();
    }

    @Override
    public Query getQueryById(String id) {
        Optional<Query> optionalQuery = queryRepository.findById(id);
        return optionalQuery.orElse(null);
    }

    @Override
    public Query addQuery(Query query) {
        return queryRepository.save(query);
    }

    @Override
    public Query updateQuery(String id, Query query) {
        if (queryRepository.existsById(id)) {
            query.setId(id);
            return queryRepository.save(query);
        }
        return null;
    }

    @Override
    public void deleteQuery(String id) {
        queryRepository.deleteById(id);
    }
}
