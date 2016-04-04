App.controller('confirmationCtrl',function($scope,ConfirmationSrv){ 


 
  $scope.reservations =  ConfirmationSrv.getReservation(); 
  $scope.payments = ConfirmationSrv.getPayments();  
  

  

});
     

  

