function volume(radius,height) {
    valNum = parseFloat(Math.PI*radius*radius*height);
    
    return valNum;
    
  }

  QUnit.test("vol", function(assert) {
	assert.equal(volume(5,4), 314.1592653589793, "radius=5, height=4 == volume of cylinder=314.1592653589793");
	assert.equal(volume(13,4), 2123.7166338267, "radius=13, height=4 == volume of cylinder=2123.7166338267");
	assert.equal(volume(15,1), 706.8583470577034, "radius=15, height=1 == volume of cylinder=706.8583470577034");
	assert.equal(volume(7,8), 1231.5043202071988, "radius=7, height=8 == volume of cylinder=1231.5043202071988");
	assert.equal(volume(6,9), 1017.8760197630929, "radius=6, height=9 == volume of cylinder=1017.8760197630929");
 });