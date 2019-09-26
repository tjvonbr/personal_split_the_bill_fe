import React, { useContext, memo } from 'react';




function Meal({ id, task, completed }) {
  const magicWand = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);


}

export default memo(Meal)