const blocks = ()=>{
    return [
        {
          id: 'section', // id is mandatory
          label: '<b>Section</b>', // You can use HTML/SVG inside labels
          attributes: { class:'gjs-block-section' },
          content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
        }, {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        }, {
          id: 'image',
          label: 'Image',
          // Select the component once it's dropped
          select: true,
          // You can pass components as a JSON instead of a simple HTML string,
          // in this case we also use a defined component type `image`
          content: { type: 'image' },
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        },
        {
          id: 'div',
          label: '<b>Div</b>',
          content: `<div style="
          background: #fff;
          border-radius: 2px;
          display: inline-block;
          height: 300px;
          position: relative;
          padding:1rem;
          width: 100%;"
          data-gjs-type="div"></div>`,
        },
        {
          id: 'card',
          label: '<b>Card</b>',
        content: `<div 
            style="
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            height: 300px;
            margin: 1rem;
            position: relative;
            padding:1rem;
            width: 300px;
            box-shadow: 0 10px 20px 0 rgba(0,0,0,0.19), 0 6px 6px 0 rgba(0,0,0,0.23);

            " data-gjs-type="div"></div>`,
        },
        {
          id:'button2',
          label:'<b>Raised button</b>',
          content:`<button type="button" class="btn btn-raised btn-primary">Primary</button>`
        },
        {
          id: 'button',
          label: '<b>Button</b>',
        content: `
        <button type="button" class="btn btn-primary">Primary</button>`,
        },
        {
          id:'badge',
          label:'<b>Badge</b>',
          content:'<span class="badge badge-secondary">New</span>'
        },
        {
          id:'button-group',
          label:'<b>Button group</b>',
          content:`<div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
        </div>`
        },
        {
          id:'card-extended',
          label:'<b>Card Extended</b>',
          content:`<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://picsum.photos/300/180" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`
        },
        {
          id:'dropdown',
          label:'<b>Dropdown</b>',
          content:`<div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>`
        },
        {
          id:'form',
          label:'<b>Form</b>',
          content:`<form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>`
        },
        {
          id:'modal',
          label:'<b>Modal</b>',
          content:`<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`
        },
        {
          id:'navbar',
          label:'<b>Navbar</b>',
          content:`<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>`
        },
        {
          id:'progress',
          label:'<b>Progress</b>',
          content:`<div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`
        },
        {
          id:'icon',
          label:'<b>Icon</b>',
          content:'<i class="material-icons">more_vert</i>'
        }


      ]
}

export default blocks();