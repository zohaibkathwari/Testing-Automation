/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, DataFactory, TestAssignment*/

//Controllers
TestAssignment.controller("AppController", ["$scope", "DataFactory",
    function ($scope, DataFactory) {
        "use strict";
        var promises = [];
        DataFactory.getData().success(function (data) {
            $scope.tests = data.tests;
            promises.push($scope.tests);
            console.log('$scope.tests: ', $scope.tests);
        });
        //Index variable to control show - hide
        $scope.selectedIndex = -1;
        $scope.setSelectedIndex = function (index) {
            $scope.selectedIndex = index;
        };
        /*pie test data*/
        $scope.unitLabels = ["passed", "failed"];
        $scope.unitData = [142, 10];
        $scope.functionalLabels = $scope.unitLabels;
        $scope.functionaData = [4321, 2145];
    }
    ]);

//Http Backend Test
TestAssignment.run(function($httpBackend) {
  $httpBackend.whenGET('data/data.json').respond({
"tests": [{
        "state": "pending",
        "type": "build",
        "name": "Tenrox-R1_1235",
        "owner": "",
        "timeStarted": ""
    }, {
        "state": "running",
        "type": "firewall",
        "name": "432642",
        "owner": "jtuck",
        "timeStarted": "04/18/2014 12:12PM"
    }, {
        "state": "rejected",
        "type": "firewall",
        "name": "432461",
        "owner": "samy",
        "timeStarted": "04/18/2014 12:12PM",
        "matrics": {
            "tests": 64,
            "maintainability": 53,
            "security": 64,
            "workmanship": 72
        },
        "buildTime": "10:46AM - 04/17/2014",
        "unitTest": {
            "testsPassed": 142,
            "testsFailed": 10,
            "passPercentage": 73,
            "codeCovered": 76
        },
        "functionalTest": {
            "testsPassed": 4321,
            "testsFailed": 2145,
            "passPercentage": 68,
            "codeCovered": 23
        },
        "result": {
            "result": "Change Rejected",
            "action": "Metrics Reduction"
        }
    }, {
        "state": "complete",
        "type": "build",
        "name": "Tenrox-R1_1234",
        "owner": "",
        "timeStarted": "04/18/2014 10:53AM",
        "matrics": {
            "tests": 64,
            "maintainability": 53,
            "security": 64,
            "workmanship": 72
        },
        "buildTime": "10:46AM - 04/17/2014",
        "unitTest": {
            "testsPassed": 142,
            "passPercentage": 73,
            "testsPailed": 10,
            "codeCovered": 76
        },
        "functionalTest": {
            "testsPassed": 4321,
            "testsFailed": 2145,
            "passPercentage": 68,
            "codeCovered": 23
        },
        "result": {
            "action": "Complete",
            "deployTo": "Production"
        }
    }, {
        "state": "rejected",
        "type": "firewall",
        "name": "432460",
        "owner": "samy",
        "timeStarted": "04/18/2014 12:12PM",
        "timeStarted": "04/18/2014 12:12PM",
        "matrics": {
            "tests": 64,
            "maintainability": 53,
            "security": 64,
            "workmanship": 72
        },
        "buildTime": "10:46AM - 04/17/2014",
        "unitTest": {
            "testsPassed": 142,
            "testsFailed": 10,
            "passPercentage": 73,
            "codeCovered": 76
        },
        "functionalTest": {
            "testsPassed": 4321,
            "testsFailed": 2145,
            "passPercentage": 68,
            "codeCovered": 23
        },
        "result": {
            "result": "Change Rejected",
            "action": "Metrics Reduction"
        }
    }, {
        "state": "accepted",
        "type": "firewall",
        "name": "432459",
        "owner": "samy",
        "timeStarted": "04/18/2014 12:12PM",
        "matrics": {
            "tests": 64,
            "maintainability": 53,
            "security": 64,
            "workmanship": 72
        },
        "buildTime": "10:46AM - 04/17/2014",
        "unitTest": {
            "testsPassed": 142,
            "passPercentage": 73,
            "testsFailed": 10,
            "codeCovered": 76
        },
        "functionalTest": {
            "testsPassed": 4321,
            "testsFailed": 2145,
            "passPercentage": 68,
            "codeCovered": 23
        },
        "result": {
            "result": "Change Accepted",
            "action": "Auto-Merged"
        }
    }]
});
});