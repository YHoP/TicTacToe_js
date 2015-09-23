describe('Player', function() {
		it("returns the player's mark", function() {
			var testPlayer = new Player("X");
			expect(testPlayer.mark).to.equal("X");
	});
});

describe('Space', function() {
		it("returns the player's mark", function() {
			var testSpace = new Space(1,2);
			expect(testSpace.x_coordinate).to.equal(1);
	});

	it("returns the player's mark", function() {
		var testSpace = new Space(1,2);
		expect(testSpace.y_coordinate).to.equal(2);
	});
});

describe('markedBy', function() {
	it("lets a player mark a space", function() {
		
			var testPlayer = new Player("X");
			console.log(testPlayer);
			var testSpace = new Space(1,2);
			testSpace.markBy(testPlayer);
			console.log(testSpace.markedBy);
			expect(testSpace.markedBy).to.equal(testPlayer);
	});
});

// describe('Board', function() {
// 	it("creates 9 spaces when it is initialized", function() {
// 		# You write the rest!
// 	});
// });
