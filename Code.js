function narcissistic(value) {
  // Code me to return true or false
  
  var x = value.toString();
  var result=0;
  for (var i = 0 in x){
    //console.log(x[i]);
    result += Math.pow(x[i],x.length);
  }
  return result == value ? true : false;
}


/******TDD Code**************
describe( "Narcissistic Function", function() {
  it( "should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
  });
  
  it( "should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
  });
});

****************************/
