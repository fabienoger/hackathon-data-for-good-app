import React, {PropTypes} from 'react';
import { Meteor }         from 'meteor/meteor';
import ReactDOM           from 'react-dom';
import Job                from '/imports/ui/components/Job';
import Loading            from '/imports/ui/components/Loading';
import keydown            from 'react-keydown';
import outsideClick       from 'outside-click';

class JobModal extends React.Component {
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.refs.jobModalContainer);
    // Add the listener
    this.outsideClick = outsideClick(element, this.props.closeModal.bind(this));
  }

  componentWillUnmount () {
    // Remove the listener
    this.outsideClick.off();
  }
  componentWillReceiveProps({keydown}) {
    if (keydown.event && keydown.event.which == 27) {
      this.props.closeModal();
    }
  }
  render() {
    let href = `http://${this.props.job.href}`;
    return (
      <div id="jobModal" className="modal active">
        <div className="modal-overlay"></div>
        <div className="modal-container" ref="jobModalContainer">
          <div className="modal-header">
            <button className="btn btn-clear float-right" onClick={this.props.closeModal}></button>
            <div className="modal-title">
              {this.props.job.job_title_scrap}
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              {this.props.job ?
                <Job job={this.props.job} />
              : <Loading />}
            </div>
          </div>
          <div className="modal-footer">
            {this.props.job.href ?
              <a className="btn website" target="_blank" href={href} style={{marginRight: "5px"}}>Site web</a>
            : ''}
            <button className="btn btn-primary" onClick={this.props.closeModal}>Fermer</button>
          </div>
        </div>
      </div>
    )
  }
}
JobModal.propTypes = {
  job: PropTypes.object.isRequired
};
export default keydown(JobModal);
