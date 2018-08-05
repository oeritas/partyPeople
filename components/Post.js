import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                    <div className="post-header">
                        <span className="profile-image"><img src="#" alt="Icon"/></span>
                        <span className="title">{this.props.title}</span>
                        <span><span>{this.props.partyHead}</span> ∙ <span>{this.props.author}</span> | <span>{this.props.date}</span> ~ <span>Due Day</span></span>
                    </div>
                    <div className="post-popup">
                        <span className="talk-balloon"><img src="#" alt="balloon"/></span>
                        <span className="headTag">head hashTag</span>
                    </div>
                    <div className="post-content">
                        <div className="post-content-oneLine">
                            <span>"<span>{this.props.oneLine}</span>"</span>
                        </div>
                        <div className="post-content-desc">
                            {this.props.desc}
                        </div>
                        <span>#<span>{this.props.hashTag}</span></span>
                    </div>
                    <div className="post-footer">
                        <span>Category | <span>{this.props.category}</span></span>
                        <span>Wanted | <span>{this.props.memberNumber}</span></span>
                        <span><button onClick={this.props.clapChange}>Clap</button> | <span>{this.props.clap}</span></span>
                    </div>
                <style jsx>{`
                   .post {
                        border: 0.5px solid black;
                        background-color: white;
                        box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.36), 0 0 0 1px rgba(255, 255, 255, 0.28);
                        cusor: pointer;
                        transition-duration: 200ms;
                        transition-property: transform, box-shadow, margin, opacity, width;
                        border-radius: 2px;
                        box-sizing: border-box;
                        margin: 10px;
                        padding: 5px;
                        min-width: 350px; /*screen size*/
                    }

                    .post:hover {
                        box-shadow: 0 4px 4px 0 rgba(255, 255, 255, 0.36), 0 0 0 2px rgba(255, 255, 255, 0.28);
                    }

                    .post-sum span {
                        padding-right: 10px;
                    }

                    .post-content span {
                        padding-right: 15px;
                    }
                   /*viewport, Responsive*/
                `}</style>
            </div>
        );
    }
}

export default Post

//onClick 함수 하나더 달아서, 이 파일에 함수박고, dom 으로 조작(바닐라관점)(안되면?)