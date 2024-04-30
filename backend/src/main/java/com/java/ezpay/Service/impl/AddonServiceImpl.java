package com.java.ezpay.Service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.ezpay.Repository.AddonRepository;
import com.java.ezpay.Service.AddonService;
import com.java.ezpay.model.Addon;

@Service
public class AddonServiceImpl implements AddonService {

    private final AddonRepository addonRepository;

    @Autowired
    public AddonServiceImpl(AddonRepository addonRepository) {
        this.addonRepository = addonRepository;
    }

    @Override
    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    @Override
    public Optional<Addon> getAddonById(String addonId) {
        return addonRepository.findById(addonId);
    }

    @Override
    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    @Override
    public Optional<Addon> updateAddon(String addonId, Addon updatedAddon) {
        Optional<Addon> existing = addonRepository.findById(addonId);
        if (existing.isPresent()) {
            updatedAddon.setAddonId(addonId);
            return Optional.of(addonRepository.save(updatedAddon));
        }
        return Optional.empty();
    }

    @Override
    public void deleteAddon(String addonId) {
        addonRepository.deleteById(addonId);
    }
}
