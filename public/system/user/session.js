angular.module('user.session',['util']).run(function(session,$http){
  session.register('user',{},function(){
    $http.post('/user/me').success(function(user){
      session.data('user',user)
    })
  })
})