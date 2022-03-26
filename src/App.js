import './App.css';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div>
      <div className='text-center my-2'>
        <div className='header'>
          <h1 className='text-secondary'>Fossil Watch Store</h1>
        </div>
        <Shop></Shop>
        <div className="row container d-flex align-items-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4>1. How React Works?</h4>
                <p>React is a Javascript library.It works by maintainig a tree.It works internally.React uses virtual dom creating web application faster.When react needs to read and write it will use virtual dom.Then the virtual dom will try to update the browsers dom most efficiently.And react also works for user interface for more experience.React components change what the user sees.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2. what are the differnce between props and state?</h5>
                <p className="card-text"><strong>Props</strong><br />
                  Props are read only. <br />
                  Props are immutable. <br />
                  Props can be passed to child components. <br />
                  Props passed from parent.
                </p>
                <p className="card-text"><strong>State</strong><br />
                  State is asynchronous. <br />
                  State is mutable. <br />
                  State can only passed as props. <br />
                  State created with component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
