



//------------------------------------------------------------------

var TimersDashbord = React.createClass({
    getInitialState: function () {
        return {
            timers: [
                {
                    id:uuid.v4(),
                    title: 'Learn JS',
                    project: 'Web Domination',
                    elapsed: '5456099',
                    runningSince:Date.now()
                },
                {
                    id:uuid.v4(),
                    title: 'Learn ReactJS',
                    project: 'Web Domination',
                    elapsed: '12356099',
                    runningSince:Date.now()
                }
            ]
        };  
    },
    handleCreateFormSubmit: function (timer) {
        this.createTimer(timer);
    },
    handleEditFormSubmit: function (attrs) {
        this.updateTimer(attrs);
    },
    handleTrashClick: function (timerId) {
        this.deleteTimer(timerId);  
    },
    createTimer:function(timer) {
        const t = helpers.newTimer(timer);
        this.setState({ timers: this.state.timers.concat(t) }); // re-render
    },
    updateTimer: function (attrs) {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project:attrs.project
                    });
                } else {
                    return timer;
                }
            })
        });
    },
    deleteTimer: function (timerId) {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        });  
    },
    render: function () {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}/>
                    <ToggleableTimerForm
                        onFormSubmit={this.handleCreateFormSubmit}
                    />
                </div>    
            </div>
        );
    }
});

//------------------------------------------------------------------

var EditableTimerList = React.createClass({
    render: function () {
        var timers = this.props.timers;
        var timerComponents = timers.map((timer) => { 
            return (
                <EditableTimer
                    key={timer.id}
                    id={timer.id}   
                    title={timer.title}
                    project={timer.project}
                    elapsed={timer.elapsed}
                    runningSince={timer.runningSince}
                    onFormSubmit={this.props.onFormSubmit}
                    onTrashClick={this.props.onTrashClick}
                />
            );
        });
        return (
             <div id="timers">
                {timerComponents}
            </div>
        );
    }
});

//------------------------------------------------------------------

var EditableTimer = React.createClass({
    getInitialState: function () {
        return {
            editFormOpen:false
        };  
    },
    handleEditClick: function () {
        this.openForm();
    },
    openForm: function () {
        this.setState({editFormOpen:true});
    },
    closeForm: function () {
        this.setState({editFormOpen:false});
    },
    handleSubmit: function (timer) {
        this.props.onFormSubmit(timer);
        this.closeForm();
    },
    handleFormClose: function () {
        this.closeForm();
    },
    render: function () {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id={this.props.id}   
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                />
            );
        }
    }
});

//------------------------------------------------------------------

var TimerForm = React.createClass({
    handleSubmit: function () {
        this.props.onFormSubmit({
            id:this.props.id,
            title: this.refs.title.value,
            project:this.refs.project.value
        });
    },
    render: function () {
        var submitText = this.props.id ? 'Update' : 'Create';
        return (
             <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" ref="title" defaultValue={this.props.title}/>
                        </div> 
                        <div className="field">
                            <label>Project</label>
                            <input type="text" ref="project" defaultValue={this.props.project}/>
                        </div> 
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button className="ui basic red button" onClick={this.props.onFormClose}>
                                Cancel
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
});

//------------------------------------------------------------------

var Timer = React.createClass({
    handleTrashClick: function () {
        this.props.onTrashClick(this.props.id);  
    },
    render: function () {
        var elapsedString = helpers.renderElapsedString(this.props.elapsed);
        return (
            <div className="ui centered card">
              <div className="content">  
                <div className="header">
                    {this.props.title}
                </div> 
                <div className="meta">
                    {this.props.project}
                </div> 
                <div className="center aligned description">
                    <h2>{elapsedString}</h2>
                </div>
                <div className="extra content">
                        <span className="right floated edit icon"
                               onClick={this.props.onEditClick}>
                        <i className="edit icon"></i>
                    </span>     
                </div> 
                <div className="extra content">
                        <span className="right floated trash icon"
                              onClick={this.handleTrashClick} >
                        <i className="trash icon"></i>
                    </span>     
                </div> 
              </div> 
              <div className="ui botton attached blue basic button">
                    Start / Stop
              </div>      
            </div>      
        );
    }
});

//------------------------------------------------------------------

var ToggleableTimerForm = React.createClass({
    getInitialState: function () {
        return {
            isOpen:false
        };
    },
    handleFormSubmit: function (timer) {
        this.props.onFormSubmit(timer);
        this.setState({isOpen:false});
    },
    handleFormClose: function () {
        this.setState({isOpen:false});
    },
    handleOpenForm: function () {
        this.setState({isOpen:true});
    },
    render: function () {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                    />
            );
        } else {
            return (
                 <div className="ui basic content aligned segment">
                    <button className="ui basic button icon" onClick={this.handleOpenForm}>
                        <i className="plus icon"></i>    
                    </button>    
                </div>  
            );
        }
    }
});

//------------------------------------------------------------------



ReactDOM.render(<TimersDashbord />,document.getElementById('root'));