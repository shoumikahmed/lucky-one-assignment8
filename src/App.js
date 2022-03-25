import './App.css';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className='text-center my-2'>
      <h1 className='text-secondary'>Fossil Watch Store</h1>
      <Shop></Shop>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h4>1. How React Works?</h4>
              <p>React is a Javascript library.It works by maintainig a tree.It works internally.React uses virtual dom creating web application faster.When react needs to read and write it will use virtual dom.Then the virtual dom will try to update the browsers dom most efficiently.And react also works for user interface for more experience.React components change what the user sees.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">2. what are the differnce between props and state?</h5>
              <p class="card-text"><strong>Props</strong><br />
                Props are read only. <br />
                Props are immutable. <br />
                Props can be passed to child components. <br />
                Props passed from parent.
              </p>
              <p class="card-text"><strong>State</strong><br />
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
  );
}

export default App;
