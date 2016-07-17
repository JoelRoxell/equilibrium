## Classes

<dl>
<dt><a href="#SignIn">SignIn</a></dt>
<dd><p>Sign in form component</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#About">About(title, description, bullets)</a> ⇒ <code>StatelessComponent</code></dt>
<dd><p>About presentational component.</p>
</dd>
<dt><a href="#app">app(state, action)</a> ⇒ <code>Object</code></dt>
<dd><p>General app reducer</p>
</dd>
<dt><a href="#signInUser">signInUser(email, password)</a> ⇒ <code>function</code></dt>
<dd><p>Sign in user action creator</p>
</dd>
<dt><a href="#createUser">createUser(email, password)</a> ⇒ <code>function</code></dt>
<dd><p>Create a new user.</p>
</dd>
<dt><a href="#deauthUser">deauthUser()</a> ⇒ <code>function</code></dt>
<dd><p>Sign out user.</p>
</dd>
<dt><a href="#authError">authError(error)</a> ⇒ <code>Object</code></dt>
<dd><p>Pass an error message to the user.</p>
</dd>
<dt><a href="#registrationError">registrationError(error)</a> ⇒ <code>Object</code></dt>
<dd><p>Pass registration error to user.</p>
</dd>
<dt><a href="#classNames">classNames()</a> ⇒ <code>string</code></dt>
<dd><p>Returnes a compried className string of passed arguments</p>
</dd>
<dt><a href="#validate">validate(form, fields)</a> ⇒ <code>Object</code></dt>
<dd><p>Validates react-redux forms.</p>
</dd>
<dt><a href="#renderComponent">renderComponent(ComponentClass)</a> ⇒ <code>DOMElement</code></dt>
<dd><p>Render component helper method, used to render components into the created cli-DOM.</p>
</dd>
</dl>

<a name="SignIn"></a>

## SignIn
Sign in form component

**Kind**: global class  

* [SignIn](#SignIn)
    * [.handleFormSubmit(FormProp)](#SignIn+handleFormSubmit)
    * [.renderErrorMessage()](#SignIn+renderErrorMessage) ⇒ <code>ReactElement</code>

<a name="SignIn+handleFormSubmit"></a>

### signIn.handleFormSubmit(FormProp)
Dispatch a created action based on passed email and password.

**Kind**: instance method of <code>[SignIn](#SignIn)</code>  

| Param | Type | Description |
| --- | --- | --- |
| FormProp | <code>Object</code> | contains the specifed form properties(emal, password). |

<a name="SignIn+renderErrorMessage"></a>

### signIn.renderErrorMessage() ⇒ <code>ReactElement</code>
Renders error message passed from server.

**Kind**: instance method of <code>[SignIn](#SignIn)</code>  
**Returns**: <code>ReactElement</code> - Html block.  
<a name="About"></a>

## About(title, description, bullets) ⇒ <code>StatelessComponent</code>
About presentational component.

**Kind**: global function  
**Returns**: <code>StatelessComponent</code> - React component.  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Application title. |
| description | <code>String</code> | Breif application description. |
| bullets | <code>Array.&lt;String&gt;</code> | Array of string bullets. |

<a name="app"></a>

## app(state, action) ⇒ <code>Object</code>
General app reducer

**Kind**: global function  
**Returns**: <code>Object</code> - Next state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Inital state. |
| action | <code>Object</code> | Redux action descriptor. |

<a name="signInUser"></a>

## signInUser(email, password) ⇒ <code>function</code>
Sign in user action creator

**Kind**: global function  
**Returns**: <code>function</code> - Wrapped action creator.  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | User email. |
| password | <code>String</code> | User password. |

<a name="createUser"></a>

## createUser(email, password) ⇒ <code>function</code>
Create a new user.

**Kind**: global function  
**Returns**: <code>function</code> - Wrapped action creator.  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | Valid email. |
| password | <code>String</code> | Password >= 6 length. |

<a name="deauthUser"></a>

## deauthUser() ⇒ <code>function</code>
Sign out user.

**Kind**: global function  
**Returns**: <code>function</code> - Wrapped action creator.  
<a name="authError"></a>

## authError(error) ⇒ <code>Object</code>
Pass an error message to the user.

**Kind**: global function  
**Returns**: <code>Object</code> - Error action object.  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Message to be displayed. |

<a name="registrationError"></a>

## registrationError(error) ⇒ <code>Object</code>
Pass registration error to user.

**Kind**: global function  
**Returns**: <code>Object</code> - Error action object.  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message. |

<a name="classNames"></a>

## classNames() ⇒ <code>string</code>
Returnes a compried className string of passed arguments

**Kind**: global function  
**Returns**: <code>string</code> - Comprised classname string  
<a name="validate"></a>

## validate(form, fields) ⇒ <code>Object</code>
Validates react-redux forms.

**Kind**: global function  
**Returns**: <code>Object</code> - Error specification.  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>Object</code> | Representation of the form. |
| fields | <code>Object</code> | A Object specific. |

<a name="renderComponent"></a>

## renderComponent(ComponentClass) ⇒ <code>DOMElement</code>
Render component helper method, used to render components into the created cli-DOM.

**Kind**: global function  
**Returns**: <code>DOMElement</code> - Wrapped jquery element node.  

| Param | Type | Description |
| --- | --- | --- |
| ComponentClass | <code>Component</code> | React component. |

