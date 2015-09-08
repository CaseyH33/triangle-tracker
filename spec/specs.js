describe('triangleTracker', function() {
  it("is equalateral if all sides are equal", function() {
    expect(triangleTracker(2,2,2)).to.equal("Is equalateral");
  });

  it("is isosceles if exactly two sides are equal", function() {
    expect(triangleTracker(1,4,4)).to.equal("Is isosceles");
  });

  it("is scalene if no sides are equal", function() {
    expect(triangleTracker(2,3,4)).to.equal("Is scalene");
  });

  it("is not a triangle if the sum of two is the same or smaller than the third", function() {
    expect(triangleTracker(2,2,8)).to.equal("Is not a triangle");
  })
});
