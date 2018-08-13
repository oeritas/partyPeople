import React from 'react'
import CheckBox from '../components/CheckBox'

class Category extends React.Component {
    render(){
        return (
            <div className="container-category">
                <div>
                    <div className="category-order">
                        <div className="category-order-item">
                            <select name="category-order-item" onChange={this.props.selChange}>
                                <option value={this.props.order[0].id}>{this.props.order[0].text}</option>
                                <option value={this.props.order[1].id}>{this.props.order[1].text}</option>
                                <option value={this.props.order[2].id}>{this.props.order[2].text}</option>
                                <option value={this.props.order[3].id}>{this.props.order[3].text}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="category-list">
                        {this.props.list.map((listItem, i) => {
                            return (
                                <CheckBox key={i} id={listItem.id} text={listItem.text} boxChange={this.props.boxChange} />
                            )
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .container-category {
                        margin-top: 30px;
                        margin-right: 40px;
                        margin-bottom: 10px;
                        padding: 10px;
                    }

                    .category-order {
                        width: 170px;
                        margin-bottom: 10px;
                    }
                    
                    select {
                        position: relative;
                        display: block;
                        margin: 0 auto;
                        width: 100%;
                        max-width: 170px;
                        height: 30px;
                        color: #A97000;
                        vertical-align: middle;
                        text-align: left;
                        user-select: none;
                        -webkit-touch-callout: none;
                        background-color: rgba(0, 0, 0, 0);
                        z-index: 1;
                        border: 1px solid #B59453;
                        border-radius: 7px;
                        cursor: pointer;
                        padding: 3px;
                        font-size: 18px;
                    }

                    select:hover {
                        background-color: #FFF9E3;
                    }

                    .category-list {
                        padding: 10px;
                        max-width: 170px;
                        border: 1px solid #B59453;
                        border-radius: 7px;
                    }

                    @media screen and (max-width: 992px) {
                        .container-category {
                            margin-top: 30px;
                            margin-right: 10px;
                            margin-bottom: 10px;
                        }
                    }

                    @media screen and (max-width: 600px) {
                        .container-category {
                            margin-top: 30px;
                            margin-right: 0px;
                            margin-bottom: 10px;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Category