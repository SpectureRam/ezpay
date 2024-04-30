package com.java.ezpay.dto.Response;

import java.util.Collections;
import java.util.List; 
 
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BasicResponse<T> {
 
    private String messege;
    @Builder.Default
    private List<T> dataList = Collections.emptyList();
    private T data;
}
