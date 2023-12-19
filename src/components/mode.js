import React, { useState, useEffect } from "react";


const [darkMode, setDarkMode] = React.useState(true)

function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

