/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojcollectiontabledatasource'],
    function(oj, ko, $, CountryFactory) {

        function dataRestViewModel() {


            //===========================================
            // Primera opcion con llamada getjson  
            //===========================================
            var self = this;
            self.data = ko.observableArray();
            $.getJSON("https://restcountries.eu/rest/v2/all").then(function(countries) {
                var tempArray = [];
                $.each(countries, function() {
                    tempArray.push({
                        name: this.name,
                        population: this.population,
                        capital: this.capital
                    });
                });
                self.data(tempArray);
            });

            self.datasource = new oj.ArrayTableDataSource(self.data, { idAttribute: 'name' });

            //===========================================
            // Segunda opcion con ojmodel y oj collection,
            // en define hacer llamada a factory
            //===========================================

            // var countries = {
            //     countryCollection: CountryFactory.createCountryCollection(),
            //     datasource: ko.observable(),
            //     initialize: function() {
            //         this.datasource(new oj.CollectionTableDataSource(this.countryCollection));
            //         this.countryCollection.fetch();
            //     }
            // };


            // return countries;





            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here. 
             * This method might be called multiple times - after the View is created 
             * and inserted into the DOM and after the View is reconnected 
             * after being disconnected.
             */
            self.connected = function() {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function() {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function() {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new dataRestViewModel();
    }
);