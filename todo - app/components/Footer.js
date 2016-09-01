
import React, {Component, PropTypes} from 'react';
import classnames from 'classnames'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]:'Completed'
};

class Footer extends Component{

    renderTodoCount() {
        const {activeCount} = this.props;
        const itemWord = activeCount === 1 ? 'item' : 'items';
        return (
            <span className="todo-count">
                <strong>{activeCount || 'No'} {itemWord} left</strong>
            </span>      
        );
    }

    renderFilterLink(filter) {
        const title = FILTER_TITLES[filter];
        const {filter:selectedFilter,onShow} = this.props
        return (
            <a className={
                classnames({selected:filter===selectedFilter})
                }
                style={{ cursor: 'pointer' }}
                onClick={() => { onShow(filter) } }>
                {title}
            </a>    
        );
    }

    renderClearButton() {
        const {completedCount, onClearCompleted} = this.props;
        if (completedCount > 0) {
            return (
                <button onClick={onClearCompleted} className="clear-completed">
                    Clear Completed
                </button>   
            );
        }    
    }

    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount() }
                <ul className="filters">
                    {
                        [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => 
                            <li key={filter}>
                                {this.renderFilterLink(filter)}
                            </li>    
                        )
                    }
                </ul>
                {this.renderClearButton()}
            </footer>    
        );
    }

}


Footer.propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow:PropTypes.func.isRequired
};

export default Footer;