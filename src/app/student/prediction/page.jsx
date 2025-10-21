import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function PredictionPage() {
  return (
    <div className="space-y-6">
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Prediction
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* <div className="text-center py-12">
            <TrendingUp className="h-16 w-16 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rank Prediction</h3>
            <p className="text-gray-600">Predict your chances</p>
          </div> */}
          students prediction
        </CardContent>
      </Card>
    </div>
  )
}
