package com.java.ezpay.Repository;

import com.java.ezpay.model.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryRepository extends JpaRepository<Query, String> {
}
