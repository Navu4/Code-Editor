import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'; // BASE CSS
import 'codemirror/theme/material.css'; // Materical Thing
import 'codemirror/mode/xml/xml'; // HTML EDITOR
import 'codemirror/mode/javascript/javascript'; // JAVASCRIPT EDITOR
import 'codemirror/mode/css/css'; // CSS EDITOR
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

import { Controlled as ControlledEditor } from 'react-codemirror2';

const Editor = (props) => {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor_container ${open ? '' : 'collapsed'} `}>
      <div className="editor_title">
        {/*Top Section : Title*/}
        {displayName}
        <button
            type='button'
            className='expand_collapse_btn'
         onClick={() => setOpen((preOpen) => !preOpen)}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange} // same as onChange
        value={value}
        className="code_mirror_wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
