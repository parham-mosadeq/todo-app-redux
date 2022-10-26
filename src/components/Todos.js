import React from 'react';

const Todos = () => {
  return (
    <div>
      {/* input start */}
      <div>
        <input type='text' placeholder='what to do?' />
      </div>
      {/* input end */}

      {/* button start */}
      <div>
        <button>add my todo</button>
      </div>
      {/* button end */}

      {/* show todo */}
      <article>
        {/* todo start */}
        <div>
          <p>say hello to world!</p>
          <div>
            <button>edit</button>
            <button>done</button>
          </div>
        </div>
        {/* todo end */}
      </article>
      {/* show todo */}
    </div>
  );
};

export default Todos;
