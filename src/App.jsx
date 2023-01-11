import React from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
    return (
        <>
            <Header />

            <div className="container-fluid vh-100 my-3">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <TaskContextProvider>
                            <TaskList />

                            <hr />

                            <div className="row">
                                <div className="col-lg-8 col-xxl-6 offset-lg-2 offset-xxl-3">
                                    <TaskForm />
                                </div>
                            </div>
                        </TaskContextProvider>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;
