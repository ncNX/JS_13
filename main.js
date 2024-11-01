
// const closure = () => {
// 	const initialValue = 0
// 	let x = initialValue

// 	function show() {
// 		return x
// 	}

// 	function change(y) {
// 		x = y
// 	}

// 	function addOne() {
// 		x = x + 1
// 	}

// 	function duble() {
// 		x = x * 2
// 	}

// 	function initial() {
// 		x = initialValue
// 	}

// 	return[show, change, addOne, duble, initial]

// }

// const [changeX, showX] = closure()
// const [changeY, showY] = closure()

// const [showX, changeX, addX, dubleX, initialX] = closure()

// console.log(showX())
// changeX(5)
// console.log(showX())
// addX()
// console.log(showX())
// dubleX()
// console.log(showX())
// initialX()
// console.log(showX())


// console.log(changeX())
// console.log(changeY())
// showX(4)
// showY(7)
// console.log(changeX())
// console.log(changeY())
