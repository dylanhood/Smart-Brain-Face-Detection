import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
            <main className="pa4 black-80">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">create account</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
                    <input className="pa2 input-reset ba bg-tranparent hover-bg-black hover-white w-100" type="text" name="name" id ="name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-whtie w-100" type="email" name="email-address" id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-whtie w-100" type="password" name="password" id="password" />
                </div>
            </fieldset>
            <div className="">
                <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="create your account"
                    />
            </div>
            </main>
        </article>
    );
}

export default Register;