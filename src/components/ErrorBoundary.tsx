import React from 'react'

interface State {
    hasError: boolean
    error?: Error | null
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
    constructor(props: React.PropsWithChildren<{}>) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, info: any) {
        // suppressed console logging in production; consider sending to remote logging
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20 }}>
                    <h2 style={{ color: 'red' }}>Error rendering this section</h2>
                    <pre>{String(this.state.error)}</pre>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
