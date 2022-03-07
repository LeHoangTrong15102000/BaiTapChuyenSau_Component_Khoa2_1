import React, { Component } from 'react'
import LikeProfile from './LikeProfile'
import ModelProfile from './ModelProfile'
import { ModelContext } from "./_Context/ModelContext";
import ModelStateProvider from './_Provider/ModelStateProvider';

export default class ContextDemo extends Component {

  // Chỉ Những thằng nào nằm trong ModelContext.Provider thì mới có thể sử dụng state của Provider
  render() {
    return (
      <ModelStateProvider>
        <div className="container">
          <ModelProfile />
          <LikeProfile />
        </div>
      </ModelStateProvider>
    )
  }
}
