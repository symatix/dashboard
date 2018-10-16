import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div class="card card-stats">
          <div class="card-header card-header-danger card-header-icon">
            <div class="card-icon">
              <i class="material-icons">info_outline</i>
            </div>
            <p class="card-category">Fixed Issues</p>
            <h3 class="card-title">75</h3>
          </div>
          <div class="card-footer">
            <div class="stats">
              <i class="material-icons">local_offer</i> Tracked from Github
            </div>
          </div>
        </div>
    )
}

export default Card