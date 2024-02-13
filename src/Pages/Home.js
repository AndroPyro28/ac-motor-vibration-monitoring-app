import React from 'react'
import '../Styles/home.css'

function Home() {
	return (
		<div className="App">
			<div className="navbar">
				<div className="sidebar">
					<div className="logo">Logo</div>{' '}
					{/* Logo added to the sidebar */}
					<nav>
						<ul>
							<li>
								<a href="#">Overview</a>
							</li>
							<li>
								<a href="#">Dashboards</a>
							</li>
							<li>
								<a href="#">Alerts</a>
							</li>
							<li>
								<a href="#">History</a>
							</li>
							<li>
								<a href="#">Account Settings</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Get Help</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="content">{/* Your main content goes here */}</div>
		</div>
	)
}

export default Home
