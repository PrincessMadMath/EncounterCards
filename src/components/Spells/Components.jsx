import React from 'react';
import ComponentIcon from './ComponentIcon'

// Import spell style
import './style/Component.css';

// Import component icon
import concentration from './icon/concentration.svg';
import verbal from './icon/verbal.svg';
import somatic from './icon/somatic.svg';
import material from './icon/material.svg';


const Components = ({spellToRender}) => {

    return(
           <div className="components">
                <div className="component-list">
                    <ComponentIcon
                        valueToCheck="concentration"
                        requiredValue={spellToRender.Duration}
                        icon={concentration}
                        alternative="Concentration"/>
                    <ComponentIcon
                        valueToCheck="v"
                        requiredValue={spellToRender.Components}
                        icon={verbal}
                        alternative="Verbal"/>
                    <ComponentIcon
                        valueToCheck="s"
                        requiredValue={spellToRender.Components}
                        icon={somatic}
                        alternative="Somatic"/>
                    <ComponentIcon
                        valueToCheck="m"
                        requiredValue={spellToRender.Components}
                        icon={material}
                        alternative="Meterial"/>
                </div>
            </div>
    );

}


export default Components;