/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'text!data/treeViewData.json', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojarraydataprovider', 'ojs/ojtreeview', 'ojs/ojjsontreedatasource'],
    function(oj, ko, $, file) {

        function AboutViewModel() {
            var self = this;
            // var datos = JSON.parse(file);
            this.data = new oj.JsonTreeDataSource(JSON.parse(file));
            // console.log(data);

            var deptArray = [{ DepartmentId: 3, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 5, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
                { DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
            ];

            self.dataprovider = new oj.ArrayDataProvider(deptArray, { keyAttributes: 'DepartmentId', implicitSort: [{ attribute: 'DepartmentId', direction: 'ascending' }] });






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
        return new AboutViewModel();
    }
);