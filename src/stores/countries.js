import { defineStore } from "pinia";
import {ref} from 'vue'
import data from '../../data.json'

export const useCountries = defineStore('countries', () => {
  const countries = ref(data)
  const country = ref(null)
  const loading = ref(false)
  
  function findByName (country) {
    countries.value = data
    let filteredCountry = []
    if (country !== '') {
      filteredCountry = countries.value.filter(c => c.name.toLowerCase() === country.toLowerCase())
    } else {
      filteredCountry = data
    }

    if (filteredCountry.length === 0) {
      loading.value = true
    } else {
      loading.value = false
    }
    countries.value = filteredCountry
  }

  function filterByRegion (region) {
    countries.value = data
    const filteredCountries = countries.value.filter(c => c.region.toLowerCase() === region.toLowerCase())
    countries.value = filteredCountries
  }

  function selectCountry (countryName) {
    const selectedCountry = countries.value.find(c => c.name.toLowerCase() === countryName.toLowerCase())
    country.value = selectedCountry
  }

  function notCountry () {
    countries.value = data
    country.value = null
  }

  function filterCountryByCode (code) {
    const filteredCountry = countries.value.find(c => c.alpha3Code === code)
    country.value = filteredCountry
  }

  return {countries, country, loading, findByName, filterByRegion, selectCountry, notCountry, filterCountryByCode}
})