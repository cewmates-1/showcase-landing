import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"



function App() {
  const [email, setEmail] = useState('')
  const url = "https://gmail.us8.list-manage.com/subscribe/post?u=ee4a764305f6e5b817a8b1f9a&amp;id=7024bf0e25";
  function handleSubmit(e) {
    e.preventDefault()
    mixpanel.track_forms('#revue-form', 'Newletter Signed up');
    mixpanel.alias(email)
    setTimeout(function() {
      mixpanel.identify(email) 
      mixpanel.track('Account Created with Email')
    }, 1000);
    setTimeout(function() {
      window.location.reload(false)
    }, 2000);
    
}
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">showcase</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">A place you can buy and support your local apparel brand!</p>

				<div className="text-3xl md:text-6xl lg:text-6xl uppercase font-black mb-8">
					Coming Soon
				</div>
        <MailchimpSubscribe
          url={url}
          render={({subscribe}) => (
            <div>
              <form 
                action=""
                onSubmit={handleSubmit}
                method="post" 
                id="revue-form"
                name="revue-form">
                <div className="flex flex-col md:flex-row justify-center mb-4">
                  <input
                    placeholder="Your email address..."
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="member[email]"
                    id="member_email"
                    className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
                  />
                  <input
                    type="submit"
                    value="Join Today"
                    name="member[subscribe]"
                    id="member_submit"
                    className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 signUpButton"
                  />
                </div>
                <div className="opacity-75 italic">
                  By subscribing, you agree with Revue's <a target="_blank" href="" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
                </div>

              </form>
            </div>
    )}
  />
				
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Built with 💖 by Crewmates</p>

					<div className="flex -mx-6">
						<a href="https://github.com/cewmates-1" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
						<a href="https://github.com/cewmates-1" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="https://github.com/cewmates-1" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App