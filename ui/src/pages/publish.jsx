import React from 'react'


export default class Publish extends React.Component{
    render(){
        return (
            <div>
                <div class="row card-panel post-panel">
                    <div class="col s12">
                        <div class="row">
                            <div class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="Title" id="first_name" type="text" class="title-input input-placeholder"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <textarea placeholder="Write your text here" class="materialize-textarea body-input input-placeholder"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12">
                                <div class="row">
                                    <div class="file-field input-field">
                                        <div>
                                            <input type="file"/>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path input-placeholder no-border" type="text" placeholder="Upload post image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12">
                                <button class="btn btn-large right btn-fit waves-effect waves-light">Publish&nbsp;&nbsp;&nbsp;<i class="material-icons">create</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}