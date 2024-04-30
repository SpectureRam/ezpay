package com.java.ezpay.Service;

import java.util.List;
import java.util.Optional;

import com.java.ezpay.model.Addon;

public interface AddonService {
    List<Addon> getAllAddons();
    Optional<Addon> getAddonById(String addonId);
    Addon createAddon(Addon addon);
    Optional<Addon> updateAddon(String addonId, Addon addon);
    void deleteAddon(String addonId);
}
