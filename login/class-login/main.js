document.addEventListener( 'DOMContentLoaded', createLogin );

function createLogin () {
    
    const urlImageCamera = './assets/camera-solid.svg'
    const urlImageUser = './assets/user-regular.svg'
    const urlImageLock = './assets/lock-regular.svg'
    
    const sectionForm = document.createElement('div');

    sectionForm.innerHTML = 
        `
        <div id="title-login">Member login</div>
        <div id="section-img" ><img id="img-camera-id" src="${urlImageCamera}"/></div>
        <form id="form-id">
            <div id="section-input-user-id"><img id="img-user-id" src="${urlImageUser}"/><input type="email" placeholder="Email" id="input-email-id"></input></div>
            <div id="section-input-lock-id"><img id="img-lock-id" src="${urlImageLock}"/><input type="password" placeholder="Password" id="input-password-id"></input></div>
            <button id="button-id">login</button>
        </form>
        `;

    document.body.appendChild( sectionForm );
    
    sectionForm.classList.add( 'div-login' );

    addClass( 'title-login', 'title-login' );
    addClass( 'img-camera-id', 'img-camera' );
    addClass( 'section-img', 'section-img' );
    addClass( 'form-id', 'form-login' );
    addClass( 'input-password-id', 'input-login' );
    addClass( 'input-email-id', 'input-login' );
    addClass( 'button-id', 'button-login' );
    addClass( 'img-user-id', 'img-user' );
    addClass( 'img-lock-id', 'img-lock' );
    addClass( 'section-input-user-id', 'section-input' );
    addClass( 'section-input-lock-id', 'section-input' ); 

};

const addClass = ( id, style ) =>{
    document.querySelector( `#${id}` ).classList.add( style );    
};