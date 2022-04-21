import React, { useContext } from 'react';
import { Context } from '../store/store'
import Filters from './Filters'

export default function Search() {
    const [state, dispatch] = useContext(Context)

    return(
        <section className="search" id="results">
            <h3 className="search__heading">Marvel Search</h3>
            <Filters />
            <div className="search__results-display">
                {state.results.map((result, i) => {
                    const key = `result--${i}`
   
                    // return(
                    //     <article className="projects__card" key={key}>
                    //         <a className="projects__subheading" href={result.url} target="_blank">{project.name}</a>
                    //         <p className="projects__caption">{project.desc}</p>
                    //         <div className="projects__link-row">
                    //             <a className="projects__link" href={project.url} target="_blank">View Site</a>
                    //             <a className="projects__link" href={project.repo} target="_blank">View Code</a>
                    //         </div>
                    //     </article>
                    // )

                })}
            </div>
        </section>
    )
}