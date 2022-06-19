const page = document.querySelector('.page')
const colorSwitchButton = document.querySelector('#button')
const colorField = document.querySelector('.color')
const startBtn = document.querySelector('#startAuto')
const stopBtn = document.querySelector('#stopAuto')

colorSwitchButton.addEventListener('click', colorSwitch)
startBtn.addEventListener('click', autoColorSwitch)
stopBtn.addEventListener('click', autoColorSwitchStop)

function colorSwitch() {
	let letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	page.style.backgroundColor = color
	colorField.innerText = color
}

function autoColorSwitch() {
	colorSwitch()
	auto = setInterval(() => {
		colorSwitch()
	}, 1000)
}

function autoColorSwitchStop() {
	clearInterval(auto)
}
